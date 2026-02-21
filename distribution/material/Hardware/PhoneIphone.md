# PhoneIphone


```text
material/Hardware/PhoneIphone
```

```text
include('material/Hardware/PhoneIphone')
```



| Illustration | PhoneIphone |
| :---: | :---: |
| ![illustration for Illustration](../../material/Hardware/PhoneIphone.png) | ![illustration for PhoneIphone](../../material/Hardware/PhoneIphone.Local.png) |



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
include('material/bootstrap')

' loads the Item which embeds the element PhoneIphone
include('material/Hardware/PhoneIphone')

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
include('material/bootstrap')

' loads the Item which embeds the element PhoneIphone
include('material/Hardware/PhoneIphone')

' renders the element
PhoneIphone('PhoneIphone', 'Phone Iphone', 'an optional tech label', 'an optional description')
@enduml
```

