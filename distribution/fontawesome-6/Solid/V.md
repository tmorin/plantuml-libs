# V


```text
fontawesome-6/Solid/V
```

```text
include('fontawesome-6/Solid/V')
```



| Illustration | V |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/V.png) | ![illustration for V](../../fontawesome-6/Solid/V.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VXs>`
- `<$VSm>`
- `<$VMd>`
- `<$VLg>`





## V

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element V
include('fontawesome-6/Solid/V')

' renders the element
V('V', 'V', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element V
include('fontawesome-6/Solid/V')

' renders the element
V('V', 'V', 'an optional tech label', 'an optional description')
@enduml
```

