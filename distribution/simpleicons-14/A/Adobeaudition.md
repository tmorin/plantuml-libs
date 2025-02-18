# Adobeaudition


```text
simpleicons-14/A/Adobeaudition
```

```text
include('simpleicons-14/A/Adobeaudition')
```



| Illustration | Adobeaudition |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Adobeaudition.png) | ![illustration for Adobeaudition](../../simpleicons-14/A/Adobeaudition.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AdobeauditionXs>`
- `<$AdobeauditionSm>`
- `<$AdobeauditionMd>`
- `<$AdobeauditionLg>`





## Adobeaudition

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Adobeaudition
include('simpleicons-14/A/Adobeaudition')

' renders the element
Adobeaudition('Adobeaudition', 'Adobeaudition', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Adobeaudition
include('simpleicons-14/A/Adobeaudition')

' renders the element
Adobeaudition('Adobeaudition', 'Adobeaudition', 'an optional tech label', 'an optional description')
@enduml
```

