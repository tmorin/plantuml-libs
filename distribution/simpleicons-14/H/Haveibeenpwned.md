# Haveibeenpwned


```text
simpleicons-14/H/Haveibeenpwned
```

```text
include('simpleicons-14/H/Haveibeenpwned')
```



| Illustration | Haveibeenpwned |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/H/Haveibeenpwned.png) | ![illustration for Haveibeenpwned](../../simpleicons-14/H/Haveibeenpwned.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HaveibeenpwnedXs>`
- `<$HaveibeenpwnedSm>`
- `<$HaveibeenpwnedMd>`
- `<$HaveibeenpwnedLg>`





## Haveibeenpwned

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Haveibeenpwned
include('simpleicons-14/H/Haveibeenpwned')

' renders the element
Haveibeenpwned('Haveibeenpwned', 'Haveibeenpwned', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Haveibeenpwned
include('simpleicons-14/H/Haveibeenpwned')

' renders the element
Haveibeenpwned('Haveibeenpwned', 'Haveibeenpwned', 'an optional tech label', 'an optional description')
@enduml
```

