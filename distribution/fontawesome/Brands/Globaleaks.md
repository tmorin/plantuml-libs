# Globaleaks


```text
fontawesome/Brands/Globaleaks
```

```text
include('fontawesome/Brands/Globaleaks')
```



| Illustration | Globaleaks |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Globaleaks.png) | ![illustration for Globaleaks](../../fontawesome/Brands/Globaleaks.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GlobaleaksXs>`
- `<$GlobaleaksSm>`
- `<$GlobaleaksMd>`
- `<$GlobaleaksLg>`





## Globaleaks

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Globaleaks
include('fontawesome/Brands/Globaleaks')

' renders the element
Globaleaks('Globaleaks', 'Globaleaks', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Globaleaks
include('fontawesome/Brands/Globaleaks')

' renders the element
Globaleaks('Globaleaks', 'Globaleaks', 'an optional tech label', 'an optional description')
@enduml
```

