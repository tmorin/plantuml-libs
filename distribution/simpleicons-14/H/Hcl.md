# Hcl


```text
simpleicons-14/H/Hcl
```

```text
include('simpleicons-14/H/Hcl')
```



| Illustration | Hcl |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/H/Hcl.png) | ![illustration for Hcl](../../simpleicons-14/H/Hcl.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HclXs>`
- `<$HclSm>`
- `<$HclMd>`
- `<$HclLg>`





## Hcl

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Hcl
include('simpleicons-14/H/Hcl')

' renders the element
Hcl('Hcl', 'Hcl', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Hcl
include('simpleicons-14/H/Hcl')

' renders the element
Hcl('Hcl', 'Hcl', 'an optional tech label', 'an optional description')
@enduml
```

