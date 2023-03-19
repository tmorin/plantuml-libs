# Elderly


```text
material-4/Social/Elderly
```

```text
include('material-4/Social/Elderly')
```



| Illustration | Elderly |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Social/Elderly.png) | ![illustration for Elderly](../../material-4/Social/Elderly.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ElderlyXs>`
- `<$ElderlySm>`
- `<$ElderlyMd>`
- `<$ElderlyLg>`





## Elderly

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Elderly
include('material-4/Social/Elderly')

' renders the element
Elderly('Elderly', 'Elderly', 'an optional tech label', 'an optional description')
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
include('material-4/bootstrap')

' loads the Item which embeds the element Elderly
include('material-4/Social/Elderly')

' renders the element
Elderly('Elderly', 'Elderly', 'an optional tech label', 'an optional description')
@enduml
```

