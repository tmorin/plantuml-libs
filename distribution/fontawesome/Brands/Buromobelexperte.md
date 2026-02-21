# Buromobelexperte


```text
fontawesome/Brands/Buromobelexperte
```

```text
include('fontawesome/Brands/Buromobelexperte')
```



| Illustration | Buromobelexperte |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Buromobelexperte.png) | ![illustration for Buromobelexperte](../../fontawesome/Brands/Buromobelexperte.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BuromobelexperteXs>`
- `<$BuromobelexperteSm>`
- `<$BuromobelexperteMd>`
- `<$BuromobelexperteLg>`





## Buromobelexperte

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Buromobelexperte
include('fontawesome/Brands/Buromobelexperte')

' renders the element
Buromobelexperte('Buromobelexperte', 'Buromobelexperte', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Buromobelexperte
include('fontawesome/Brands/Buromobelexperte')

' renders the element
Buromobelexperte('Buromobelexperte', 'Buromobelexperte', 'an optional tech label', 'an optional description')
@enduml
```

