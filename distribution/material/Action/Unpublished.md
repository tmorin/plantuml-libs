# Unpublished


```text
material/Action/Unpublished
```

```text
include('material/Action/Unpublished')
```



| Illustration | Unpublished |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/Unpublished.png) | ![illustration for Unpublished](../../material/Action/Unpublished.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UnpublishedXs>`
- `<$UnpublishedSm>`
- `<$UnpublishedMd>`
- `<$UnpublishedLg>`





## Unpublished

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Unpublished
include('material/Action/Unpublished')

' renders the element
Unpublished('Unpublished', 'Unpublished', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element Unpublished
include('material/Action/Unpublished')

' renders the element
Unpublished('Unpublished', 'Unpublished', 'an optional tech label', 'an optional description')
@enduml
```

