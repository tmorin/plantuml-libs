# Coolermaster


```text
simpleicons-14/C/Coolermaster
```

```text
include('simpleicons-14/C/Coolermaster')
```



| Illustration | Coolermaster |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/C/Coolermaster.png) | ![illustration for Coolermaster](../../simpleicons-14/C/Coolermaster.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CoolermasterXs>`
- `<$CoolermasterSm>`
- `<$CoolermasterMd>`
- `<$CoolermasterLg>`





## Coolermaster

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Coolermaster
include('simpleicons-14/C/Coolermaster')

' renders the element
Coolermaster('Coolermaster', 'Coolermaster', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Coolermaster
include('simpleicons-14/C/Coolermaster')

' renders the element
Coolermaster('Coolermaster', 'Coolermaster', 'an optional tech label', 'an optional description')
@enduml
```

