# Jfrogbintray


```text
simpleicons-14/J/Jfrogbintray
```

```text
include('simpleicons-14/J/Jfrogbintray')
```



| Illustration | Jfrogbintray |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/J/Jfrogbintray.png) | ![illustration for Jfrogbintray](../../simpleicons-14/J/Jfrogbintray.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$JfrogbintrayXs>`
- `<$JfrogbintraySm>`
- `<$JfrogbintrayMd>`
- `<$JfrogbintrayLg>`





## Jfrogbintray

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Jfrogbintray
include('simpleicons-14/J/Jfrogbintray')

' renders the element
Jfrogbintray('Jfrogbintray', 'Jfrogbintray', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Jfrogbintray
include('simpleicons-14/J/Jfrogbintray')

' renders the element
Jfrogbintray('Jfrogbintray', 'Jfrogbintray', 'an optional tech label', 'an optional description')
@enduml
```

