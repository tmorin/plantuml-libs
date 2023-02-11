# Tamiya


```text
simpleicons-8/T/Tamiya
```

```text
include('simpleicons-8/T/Tamiya')
```



| Illustration | Tamiya |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/T/Tamiya.png) | ![illustration for Tamiya](../../simpleicons-8/T/Tamiya.Local.png) |




## Tamiya

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Tamiya
include('simpleicons-8/T/Tamiya')

' renders the element
Tamiya('Tamiya', 'Tamiya', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Tamiya
include('simpleicons-8/T/Tamiya')

' renders the element
Tamiya('Tamiya', 'Tamiya', 'an optional tech label', 'an optional description')
@enduml
```

