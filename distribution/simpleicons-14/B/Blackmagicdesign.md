# Blackmagicdesign


```text
simpleicons-14/B/Blackmagicdesign
```

```text
include('simpleicons-14/B/Blackmagicdesign')
```



| Illustration | Blackmagicdesign |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/B/Blackmagicdesign.png) | ![illustration for Blackmagicdesign](../../simpleicons-14/B/Blackmagicdesign.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BlackmagicdesignXs>`
- `<$BlackmagicdesignSm>`
- `<$BlackmagicdesignMd>`
- `<$BlackmagicdesignLg>`





## Blackmagicdesign

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Blackmagicdesign
include('simpleicons-14/B/Blackmagicdesign')

' renders the element
Blackmagicdesign('Blackmagicdesign', 'Blackmagicdesign', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Blackmagicdesign
include('simpleicons-14/B/Blackmagicdesign')

' renders the element
Blackmagicdesign('Blackmagicdesign', 'Blackmagicdesign', 'an optional tech label', 'an optional description')
@enduml
```

