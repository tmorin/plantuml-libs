# Adobephotoshop


```text
simpleicons-14/A/Adobephotoshop
```

```text
include('simpleicons-14/A/Adobephotoshop')
```



| Illustration | Adobephotoshop |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Adobephotoshop.png) | ![illustration for Adobephotoshop](../../simpleicons-14/A/Adobephotoshop.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AdobephotoshopXs>`
- `<$AdobephotoshopSm>`
- `<$AdobephotoshopMd>`
- `<$AdobephotoshopLg>`





## Adobephotoshop

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Adobephotoshop
include('simpleicons-14/A/Adobephotoshop')

' renders the element
Adobephotoshop('Adobephotoshop', 'Adobephotoshop', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Adobephotoshop
include('simpleicons-14/A/Adobephotoshop')

' renders the element
Adobephotoshop('Adobephotoshop', 'Adobephotoshop', 'an optional tech label', 'an optional description')
@enduml
```

