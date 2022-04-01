# Lens


```text
simpleicons-6/L/Lens
```

```text
include('simpleicons-6/L/Lens')
```



| Illustration | Lens |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/L/Lens.png) | ![illustration for Lens](../../simpleicons-6/L/Lens.Local.png) |




## Lens

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Lens
include('simpleicons-6/L/Lens')

' renders the element
Lens('Lens', 'Lens', 'an optional tech label')
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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Lens
include('simpleicons-6/L/Lens')

' renders the element
Lens('Lens', 'Lens', 'an optional tech label')
@enduml
```

