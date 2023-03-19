# HandsPraying


```text
fontawesome-6/Solid/HandsPraying
```

```text
include('fontawesome-6/Solid/HandsPraying')
```



| Illustration | HandsPraying |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/HandsPraying.png) | ![illustration for HandsPraying](../../fontawesome-6/Solid/HandsPraying.Local.png) |



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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element HandsPraying
include('fontawesome-6/Solid/HandsPraying')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element HandsPraying
include('fontawesome-6/Solid/HandsPraying')

' renders the element
HandsPraying('HandsPraying', 'Hands Praying', 'an optional tech label', 'an optional description')
@enduml
```

