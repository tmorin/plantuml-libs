# Angrycreative


```text
fontawesome/Brands/Angrycreative
```

```text
include('fontawesome/Brands/Angrycreative')
```



| Illustration | Angrycreative |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Angrycreative.png) | ![illustration for Angrycreative](../../fontawesome/Brands/Angrycreative.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AngrycreativeXs>`
- `<$AngrycreativeSm>`
- `<$AngrycreativeMd>`
- `<$AngrycreativeLg>`





## Angrycreative

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Angrycreative
include('fontawesome/Brands/Angrycreative')

' renders the element
Angrycreative('Angrycreative', 'Angrycreative', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Angrycreative
include('fontawesome/Brands/Angrycreative')

' renders the element
Angrycreative('Angrycreative', 'Angrycreative', 'an optional tech label', 'an optional description')
@enduml
```

