# PhoneIphone


```text
material-4/Hardware/PhoneIphone
```

```text
include('material-4/Hardware/PhoneIphone')
```



| Illustration | PhoneIphone |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Hardware/PhoneIphone.png) | ![illustration for PhoneIphone](../../material-4/Hardware/PhoneIphone.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PhoneIphoneXs>`
- `<$PhoneIphoneSm>`
- `<$PhoneIphoneMd>`
- `<$PhoneIphoneLg>`





## PhoneIphone

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element PhoneIphone
include('material-4/Hardware/PhoneIphone')

' renders the element
PhoneIphone('PhoneIphone', 'Phone Iphone', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PhoneIphone
include('material-4/Hardware/PhoneIphone')

' renders the element
PhoneIphone('PhoneIphone', 'Phone Iphone', 'an optional tech label', 'an optional description')
@enduml
```

