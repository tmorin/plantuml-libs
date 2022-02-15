# Fnac


```text
simpleicons-6/F/Fnac
```

```text
include('simpleicons-6/F/Fnac')
```



| Illustration | Fnac |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/F/Fnac.png) | ![illustration for Fnac](../../simpleicons-6/F/Fnac.Local.png) |




## Fnac

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Fnac
include('simpleicons-6/F/Fnac')

' renders the element
Fnac('Fnac', 'Fnac', 'an optional tech label')
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

' loads the Item which embeds the element Fnac
include('simpleicons-6/F/Fnac')

' renders the element
Fnac('Fnac', 'Fnac', 'an optional tech label')
@enduml
```

