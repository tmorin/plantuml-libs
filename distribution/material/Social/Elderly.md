# Elderly


```text
material/Social/Elderly
```

```text
include('material/Social/Elderly')
```



| Illustration | Elderly |
| :---: | :---: |
| ![illustration for Illustration](../../material/Social/Elderly.png) | ![illustration for Elderly](../../material/Social/Elderly.Local.png) |



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
include('material/bootstrap')

' loads the Item which embeds the element Elderly
include('material/Social/Elderly')

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
include('material/bootstrap')

' loads the Item which embeds the element Elderly
include('material/Social/Elderly')

' renders the element
Elderly('Elderly', 'Elderly', 'an optional tech label', 'an optional description')
@enduml
```

