# Vsco


```text
simpleicons-7/V/Vsco
```

```text
include('simpleicons-7/V/Vsco')
```



| Illustration | Vsco |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/V/Vsco.png) | ![illustration for Vsco](../../simpleicons-7/V/Vsco.Local.png) |




## Vsco

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Vsco
include('simpleicons-7/V/Vsco')

' renders the element
Vsco('Vsco', 'Vsco', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Vsco
include('simpleicons-7/V/Vsco')

' renders the element
Vsco('Vsco', 'Vsco', 'an optional tech label', 'an optional description')
@enduml
```
