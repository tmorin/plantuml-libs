# Lungs


```text
fontawesome/Solid/Lungs
```

```text
include('fontawesome/Solid/Lungs')
```



| Illustration | Lungs |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Lungs.png) | ![illustration for Lungs](../../fontawesome/Solid/Lungs.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LungsXs>`
- `<$LungsSm>`
- `<$LungsMd>`
- `<$LungsLg>`





## Lungs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Lungs
include('fontawesome/Solid/Lungs')

' renders the element
Lungs('Lungs', 'Lungs', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Lungs
include('fontawesome/Solid/Lungs')

' renders the element
Lungs('Lungs', 'Lungs', 'an optional tech label', 'an optional description')
@enduml
```

