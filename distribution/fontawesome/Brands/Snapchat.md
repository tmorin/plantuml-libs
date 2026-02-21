# Snapchat


```text
fontawesome/Brands/Snapchat
```

```text
include('fontawesome/Brands/Snapchat')
```



| Illustration | Snapchat |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Snapchat.png) | ![illustration for Snapchat](../../fontawesome/Brands/Snapchat.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SnapchatXs>`
- `<$SnapchatSm>`
- `<$SnapchatMd>`
- `<$SnapchatLg>`





## Snapchat

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Snapchat
include('fontawesome/Brands/Snapchat')

' renders the element
Snapchat('Snapchat', 'Snapchat', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Snapchat
include('fontawesome/Brands/Snapchat')

' renders the element
Snapchat('Snapchat', 'Snapchat', 'an optional tech label', 'an optional description')
@enduml
```

