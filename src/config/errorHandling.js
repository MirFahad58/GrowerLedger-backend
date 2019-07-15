// This Module is responsible for handling error and returning response
module.exports = {
    error : (status , message , res) => {
      return res.status(status).json({ status , message });
    }
  };