# Hcl


```text
simpleicons-5/H/Hcl
```

```text
include('simpleicons-5/H/Hcl')
```



| Illustration | Hcl |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/H/Hcl.png) | ![illustration for Hcl](../../simpleicons-5/H/Hcl.Local.png) |




## Hcl

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Hcl
include('simpleicons-5/H/Hcl')

' renders the element
Hcl('Hcl', 'Hcl', 'an optional tech label')
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

' loads the Item which embeds the element Hcl
include('simpleicons-5/H/Hcl')

' renders the element
Hcl('Hcl', 'Hcl', 'an optional tech label')
@enduml
```

