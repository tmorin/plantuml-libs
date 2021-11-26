# Result


```text
eventstorming/Element/Result
```

```text
include('eventstorming/Element/Result')
```



| Result |
| :---: |
| ![illustration for Result](../../eventstorming/Element/Result.Local.png) |




## Result

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eventstorming/bootstrap')

' loads the Item which embeds the element Result
include('eventstorming/Element/Result')

Result('Result') [
Result
--
A result provides a feedback about an already processed message.
]
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eventstorming/bootstrap')

' loads the Item which embeds the element Result
include('eventstorming/Element/Result')

Result('Result') [
Result
--
A result provides a feedback about an already processed message.
]
@enduml
```

