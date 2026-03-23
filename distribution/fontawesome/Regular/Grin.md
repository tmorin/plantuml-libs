# Grin


```text
fontawesome/Regular/Grin
```

```text
include('fontawesome/Regular/Grin')
```



| Illustration | Grin |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/Grin.png) | ![illustration for Grin](../../fontawesome/Regular/Grin.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GrinXs>`
- `<$GrinSm>`
- `<$GrinMd>`
- `<$GrinLg>`





## Grin

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Grin
include('fontawesome/Regular/Grin')

' renders the element
Grin('Grin', 'Grin', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Grin
include('fontawesome/Regular/Grin')

' renders the element
Grin('Grin', 'Grin', 'an optional tech label', 'an optional description')
@enduml
```

