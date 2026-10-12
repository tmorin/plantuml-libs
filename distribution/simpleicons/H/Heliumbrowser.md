# Heliumbrowser


```text
simpleicons/H/Heliumbrowser
```

```text
include('simpleicons/H/Heliumbrowser')
```



| Illustration | Heliumbrowser |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/H/Heliumbrowser.png) | ![illustration for Heliumbrowser](../../simpleicons/H/Heliumbrowser.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HeliumbrowserXs>`
- `<$HeliumbrowserSm>`
- `<$HeliumbrowserMd>`
- `<$HeliumbrowserLg>`





## Heliumbrowser

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Heliumbrowser
include('simpleicons/H/Heliumbrowser')

' renders the element
Heliumbrowser('Heliumbrowser', 'Heliumbrowser', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Heliumbrowser
include('simpleicons/H/Heliumbrowser')

' renders the element
Heliumbrowser('Heliumbrowser', 'Heliumbrowser', 'an optional tech label', 'an optional description')
@enduml
```

