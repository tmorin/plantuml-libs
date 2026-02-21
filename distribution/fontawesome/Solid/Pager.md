# Pager


```text
fontawesome/Solid/Pager
```

```text
include('fontawesome/Solid/Pager')
```



| Illustration | Pager |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Pager.png) | ![illustration for Pager](../../fontawesome/Solid/Pager.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PagerXs>`
- `<$PagerSm>`
- `<$PagerMd>`
- `<$PagerLg>`





## Pager

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Pager
include('fontawesome/Solid/Pager')

' renders the element
Pager('Pager', 'Pager', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Pager
include('fontawesome/Solid/Pager')

' renders the element
Pager('Pager', 'Pager', 'an optional tech label', 'an optional description')
@enduml
```

