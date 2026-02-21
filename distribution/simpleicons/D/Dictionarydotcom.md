# Dictionarydotcom


```text
simpleicons/D/Dictionarydotcom
```

```text
include('simpleicons/D/Dictionarydotcom')
```



| Illustration | Dictionarydotcom |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/D/Dictionarydotcom.png) | ![illustration for Dictionarydotcom](../../simpleicons/D/Dictionarydotcom.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DictionarydotcomXs>`
- `<$DictionarydotcomSm>`
- `<$DictionarydotcomMd>`
- `<$DictionarydotcomLg>`





## Dictionarydotcom

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Dictionarydotcom
include('simpleicons/D/Dictionarydotcom')

' renders the element
Dictionarydotcom('Dictionarydotcom', 'Dictionarydotcom', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Dictionarydotcom
include('simpleicons/D/Dictionarydotcom')

' renders the element
Dictionarydotcom('Dictionarydotcom', 'Dictionarydotcom', 'an optional tech label', 'an optional description')
@enduml
```

