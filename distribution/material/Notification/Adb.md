# Adb


```text
material/Notification/Adb
```

```text
include('material/Notification/Adb')
```



| Illustration | Adb |
| :---: | :---: |
| ![illustration for Illustration](../../material/Notification/Adb.png) | ![illustration for Adb](../../material/Notification/Adb.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AdbXs>`
- `<$AdbSm>`
- `<$AdbMd>`
- `<$AdbLg>`





## Adb

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Adb
include('material/Notification/Adb')

' renders the element
Adb('Adb', 'Adb', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Adb
include('material/Notification/Adb')

' renders the element
Adb('Adb', 'Adb', 'an optional tech label', 'an optional description')
@enduml
```

