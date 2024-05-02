const disableTraceMethod = (req, res, next) => {
  if (req.method === 'TRACE') {
    return res.sendStatus(405);
  }
  next();
};

module.exports = disableTraceMethod;
