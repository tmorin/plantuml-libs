# Tamiya


```text
simpleicons-7/T/Tamiya
```

```text
include('simpleicons-7/T/Tamiya')
```



| Illustration | Tamiya |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/T/Tamiya.png) | ![illustration for Tamiya](../../simpleicons-7/T/Tamiya.Local.png) |




## Tamiya

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Tamiya
include('simpleicons-7/T/Tamiya')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Tamiya
include('simpleicons-7/T/Tamiya')

' renders the element
Tamiya('Tamiya', 'Tamiya', 'an optional tech label', 'an optional description')
@enduml
```

