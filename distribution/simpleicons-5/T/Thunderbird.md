# Thunderbird


```text
simpleicons-5/T/Thunderbird
```

```text
include('simpleicons-5/T/Thunderbird')
```



| Illustration | Thunderbird |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/T/Thunderbird.png) | ![illustration for Thunderbird](../../simpleicons-5/T/Thunderbird.Local.png) |




## Thunderbird

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Thunderbird
include('simpleicons-5/T/Thunderbird')

' renders the element
Thunderbird('Thunderbird', 'Thunderbird', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Thunderbird
include('simpleicons-5/T/Thunderbird')

' renders the element
Thunderbird('Thunderbird', 'Thunderbird', 'an optional tech label')
@enduml
```

