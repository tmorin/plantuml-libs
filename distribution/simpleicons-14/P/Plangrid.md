# Plangrid


```text
simpleicons-14/P/Plangrid
```

```text
include('simpleicons-14/P/Plangrid')
```



| Illustration | Plangrid |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/P/Plangrid.png) | ![illustration for Plangrid](../../simpleicons-14/P/Plangrid.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PlangridXs>`
- `<$PlangridSm>`
- `<$PlangridMd>`
- `<$PlangridLg>`





## Plangrid

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Plangrid
include('simpleicons-14/P/Plangrid')

' renders the element
Plangrid('Plangrid', 'Plangrid', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Plangrid
include('simpleicons-14/P/Plangrid')

' renders the element
Plangrid('Plangrid', 'Plangrid', 'an optional tech label', 'an optional description')
@enduml
```

