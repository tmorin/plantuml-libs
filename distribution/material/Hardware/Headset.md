# Headset


```text
material/Hardware/Headset
```

```text
include('material/Hardware/Headset')
```



| Illustration | Headset |
| :---: | :---: |
| ![illustration for Illustration](../../material/Hardware/Headset.png) | ![illustration for Headset](../../material/Hardware/Headset.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HeadsetXs>`
- `<$HeadsetSm>`
- `<$HeadsetMd>`
- `<$HeadsetLg>`





## Headset

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Headset
include('material/Hardware/Headset')

' renders the element
Headset('Headset', 'Headset', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Headset
include('material/Hardware/Headset')

' renders the element
Headset('Headset', 'Headset', 'an optional tech label', 'an optional description')
@enduml
```

