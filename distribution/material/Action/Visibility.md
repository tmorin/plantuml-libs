# Visibility


```text
material/Action/Visibility
```

```text
include('material/Action/Visibility')
```



| Illustration | Visibility |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/Visibility.png) | ![illustration for Visibility](../../material/Action/Visibility.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VisibilityXs>`
- `<$VisibilitySm>`
- `<$VisibilityMd>`
- `<$VisibilityLg>`





## Visibility

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Visibility
include('material/Action/Visibility')

' renders the element
Visibility('Visibility', 'Visibility', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Visibility
include('material/Action/Visibility')

' renders the element
Visibility('Visibility', 'Visibility', 'an optional tech label', 'an optional description')
@enduml
```

