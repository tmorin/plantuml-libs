# PhoneAndroid


```text
material/Hardware/PhoneAndroid
```

```text
include('material/Hardware/PhoneAndroid')
```



| Illustration | PhoneAndroid |
| :---: | :---: |
| ![illustration for Illustration](../../material/Hardware/PhoneAndroid.png) | ![illustration for PhoneAndroid](../../material/Hardware/PhoneAndroid.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PhoneAndroidXs>`
- `<$PhoneAndroidSm>`
- `<$PhoneAndroidMd>`
- `<$PhoneAndroidLg>`





## PhoneAndroid

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element PhoneAndroid
include('material/Hardware/PhoneAndroid')

' renders the element
PhoneAndroid('PhoneAndroid', 'Phone Android', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PhoneAndroid
include('material/Hardware/PhoneAndroid')

' renders the element
PhoneAndroid('PhoneAndroid', 'Phone Android', 'an optional tech label', 'an optional description')
@enduml
```

