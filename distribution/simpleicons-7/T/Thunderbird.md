# Thunderbird


```text
simpleicons-7/T/Thunderbird
```

```text
include('simpleicons-7/T/Thunderbird')
```



| Illustration | Thunderbird |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/T/Thunderbird.png) | ![illustration for Thunderbird](../../simpleicons-7/T/Thunderbird.Local.png) |




## Thunderbird

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Thunderbird
include('simpleicons-7/T/Thunderbird')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Thunderbird
include('simpleicons-7/T/Thunderbird')

' renders the element
Thunderbird('Thunderbird', 'Thunderbird', 'an optional tech label')
@enduml
```

