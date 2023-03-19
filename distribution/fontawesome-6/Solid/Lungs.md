# Lungs


```text
fontawesome-6/Solid/Lungs
```

```text
include('fontawesome-6/Solid/Lungs')
```



| Illustration | Lungs |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Lungs.png) | ![illustration for Lungs](../../fontawesome-6/Solid/Lungs.Local.png) |



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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Lungs
include('fontawesome-6/Solid/Lungs')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Lungs
include('fontawesome-6/Solid/Lungs')

' renders the element
Lungs('Lungs', 'Lungs', 'an optional tech label', 'an optional description')
@enduml
```

