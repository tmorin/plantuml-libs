# Justgiving


```text
simpleicons-14/J/Justgiving
```

```text
include('simpleicons-14/J/Justgiving')
```



| Illustration | Justgiving |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/J/Justgiving.png) | ![illustration for Justgiving](../../simpleicons-14/J/Justgiving.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$JustgivingXs>`
- `<$JustgivingSm>`
- `<$JustgivingMd>`
- `<$JustgivingLg>`





## Justgiving

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Justgiving
include('simpleicons-14/J/Justgiving')

' renders the element
Justgiving('Justgiving', 'Justgiving', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Justgiving
include('simpleicons-14/J/Justgiving')

' renders the element
Justgiving('Justgiving', 'Justgiving', 'an optional tech label', 'an optional description')
@enduml
```

