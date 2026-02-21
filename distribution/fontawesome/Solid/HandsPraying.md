# HandsPraying


```text
fontawesome/Solid/HandsPraying
```

```text
include('fontawesome/Solid/HandsPraying')
```



| Illustration | HandsPraying |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/HandsPraying.png) | ![illustration for HandsPraying](../../fontawesome/Solid/HandsPraying.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HandsPrayingXs>`
- `<$HandsPrayingSm>`
- `<$HandsPrayingMd>`
- `<$HandsPrayingLg>`





## HandsPraying

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element HandsPraying
include('fontawesome/Solid/HandsPraying')

' renders the element
HandsPraying('HandsPraying', 'Hands Praying', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HandsPraying
include('fontawesome/Solid/HandsPraying')

' renders the element
HandsPraying('HandsPraying', 'Hands Praying', 'an optional tech label', 'an optional description')
@enduml
```

