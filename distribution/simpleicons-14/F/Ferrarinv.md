# Ferrarinv


```text
simpleicons-14/F/Ferrarinv
```

```text
include('simpleicons-14/F/Ferrarinv')
```



| Illustration | Ferrarinv |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/F/Ferrarinv.png) | ![illustration for Ferrarinv](../../simpleicons-14/F/Ferrarinv.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FerrarinvXs>`
- `<$FerrarinvSm>`
- `<$FerrarinvMd>`
- `<$FerrarinvLg>`





## Ferrarinv

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Ferrarinv
include('simpleicons-14/F/Ferrarinv')

' renders the element
Ferrarinv('Ferrarinv', 'Ferrarinv', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Ferrarinv
include('simpleicons-14/F/Ferrarinv')

' renders the element
Ferrarinv('Ferrarinv', 'Ferrarinv', 'an optional tech label', 'an optional description')
@enduml
```

