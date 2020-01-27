using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Exceptions
{
    [Serializable]
    public class RecordAlreadyExistsException : Exception
    {
        public RecordAlreadyExistsException() { }
        public RecordAlreadyExistsException(string message) : base(message) { }
        public RecordAlreadyExistsException(string message, Exception inner) : base(message, inner) { }
        protected RecordAlreadyExistsException(
          System.Runtime.Serialization.SerializationInfo info,
          System.Runtime.Serialization.StreamingContext context) : base(info, context) { }
    }
}
