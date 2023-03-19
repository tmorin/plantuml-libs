# Zillow


```text
simpleicons-8/Z/Zillow
```

```text
include('simpleicons-8/Z/Zillow')
```



| Illustration | Zillow |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/Z/Zillow.png) | ![illustration for Zillow](../../simpleicons-8/Z/Zillow.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ZillowXs>`
- `<$ZillowSm>`
- `<$ZillowMd>`
- `<$ZillowLg>`





## Zillow

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Zillow
include('simpleicons-8/Z/Zillow')

' renders the element
Zillow('Zillow', 'Zillow', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Zillow
include('simpleicons-8/Z/Zillow')

' renders the element
Zillow('Zillow', 'Zillow', 'an optional tech label', 'an optional description')
@enduml
```

