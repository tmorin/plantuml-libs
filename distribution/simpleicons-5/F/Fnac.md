# Fnac


```text
simpleicons-5/F/Fnac
```

```text
include('simpleicons-5/F/Fnac')
```



| Illustration | Fnac |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/F/Fnac.png) | ![illustration for Fnac](../../simpleicons-5/F/Fnac.Local.png) |




## Fnac

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Fnac
include('simpleicons-5/F/Fnac')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Fnac
include('simpleicons-5/F/Fnac')

' renders the element
Fnac('Fnac', 'Fnac', 'an optional tech label')
@enduml
```

