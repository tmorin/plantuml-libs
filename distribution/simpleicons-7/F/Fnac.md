# Fnac


```text
simpleicons-7/F/Fnac
```

```text
include('simpleicons-7/F/Fnac')
```



| Illustration | Fnac |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/F/Fnac.png) | ![illustration for Fnac](../../simpleicons-7/F/Fnac.Local.png) |




## Fnac

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Fnac
include('simpleicons-7/F/Fnac')

' renders the element
Fnac('Fnac', 'Fnac', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Fnac
include('simpleicons-7/F/Fnac')

' renders the element
Fnac('Fnac', 'Fnac', 'an optional tech label', 'an optional description')
@enduml
```

