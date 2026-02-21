# PhoneFlip


```text
fontawesome/Solid/PhoneFlip
```

```text
include('fontawesome/Solid/PhoneFlip')
```



| Illustration | PhoneFlip |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/PhoneFlip.png) | ![illustration for PhoneFlip](../../fontawesome/Solid/PhoneFlip.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PhoneFlipXs>`
- `<$PhoneFlipSm>`
- `<$PhoneFlipMd>`
- `<$PhoneFlipLg>`





## PhoneFlip

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element PhoneFlip
include('fontawesome/Solid/PhoneFlip')

' renders the element
PhoneFlip('PhoneFlip', 'Phone Flip', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PhoneFlip
include('fontawesome/Solid/PhoneFlip')

' renders the element
PhoneFlip('PhoneFlip', 'Phone Flip', 'an optional tech label', 'an optional description')
@enduml
```

