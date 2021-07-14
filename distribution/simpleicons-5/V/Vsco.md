# Vsco


```text
simpleicons-5/V/Vsco
```

```text
include('simpleicons-5/V/Vsco')
```



| Illustration | Vsco |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/V/Vsco.png) | ![illustration for Vsco](../../simpleicons-5/V/Vsco.Local.png) |




## Vsco

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Vsco
include('simpleicons-5/V/Vsco')

' renders the element
Vsco('Vsco', 'Vsco', 'an optional tech label')
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

' loads the Item which embeds the element Vsco
include('simpleicons-5/V/Vsco')

' renders the element
Vsco('Vsco', 'Vsco', 'an optional tech label')
@enduml
```

