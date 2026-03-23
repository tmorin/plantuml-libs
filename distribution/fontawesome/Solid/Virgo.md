# Virgo


```text
fontawesome/Solid/Virgo
```

```text
include('fontawesome/Solid/Virgo')
```



| Illustration | Virgo |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Virgo.png) | ![illustration for Virgo](../../fontawesome/Solid/Virgo.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VirgoXs>`
- `<$VirgoSm>`
- `<$VirgoMd>`
- `<$VirgoLg>`





## Virgo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Virgo
include('fontawesome/Solid/Virgo')

' renders the element
Virgo('Virgo', 'Virgo', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Virgo
include('fontawesome/Solid/Virgo')

' renders the element
Virgo('Virgo', 'Virgo', 'an optional tech label', 'an optional description')
@enduml
```

