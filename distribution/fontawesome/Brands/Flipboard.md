# Flipboard


```text
fontawesome/Brands/Flipboard
```

```text
include('fontawesome/Brands/Flipboard')
```



| Illustration | Flipboard |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Flipboard.png) | ![illustration for Flipboard](../../fontawesome/Brands/Flipboard.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FlipboardXs>`
- `<$FlipboardSm>`
- `<$FlipboardMd>`
- `<$FlipboardLg>`





## Flipboard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Flipboard
include('fontawesome/Brands/Flipboard')

' renders the element
Flipboard('Flipboard', 'Flipboard', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Flipboard
include('fontawesome/Brands/Flipboard')

' renders the element
Flipboard('Flipboard', 'Flipboard', 'an optional tech label', 'an optional description')
@enduml
```

