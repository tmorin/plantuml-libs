# Padlet


```text
fontawesome-6/Brands/Padlet
```

```text
include('fontawesome-6/Brands/Padlet')
```



| Illustration | Padlet |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Padlet.png) | ![illustration for Padlet](../../fontawesome-6/Brands/Padlet.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PadletXs>`
- `<$PadletSm>`
- `<$PadletMd>`
- `<$PadletLg>`





## Padlet

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Padlet
include('fontawesome-6/Brands/Padlet')

' renders the element
Padlet('Padlet', 'Padlet', 'an optional tech label', 'an optional description')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Padlet
include('fontawesome-6/Brands/Padlet')

' renders the element
Padlet('Padlet', 'Padlet', 'an optional tech label', 'an optional description')
@enduml
```

