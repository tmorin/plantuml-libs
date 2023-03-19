# MobileButton


```text
fontawesome-6/Solid/MobileButton
```

```text
include('fontawesome-6/Solid/MobileButton')
```



| Illustration | MobileButton |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/MobileButton.png) | ![illustration for MobileButton](../../fontawesome-6/Solid/MobileButton.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MobileButtonXs>`
- `<$MobileButtonSm>`
- `<$MobileButtonMd>`
- `<$MobileButtonLg>`





## MobileButton

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element MobileButton
include('fontawesome-6/Solid/MobileButton')

' renders the element
MobileButton('MobileButton', 'Mobile Button', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element MobileButton
include('fontawesome-6/Solid/MobileButton')

' renders the element
MobileButton('MobileButton', 'Mobile Button', 'an optional tech label', 'an optional description')
@enduml
```

