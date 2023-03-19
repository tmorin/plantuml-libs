# Xaml


```text
simpleicons-8/X/Xaml
```

```text
include('simpleicons-8/X/Xaml')
```



| Illustration | Xaml |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/X/Xaml.png) | ![illustration for Xaml](../../simpleicons-8/X/Xaml.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$XamlXs>`
- `<$XamlSm>`
- `<$XamlMd>`
- `<$XamlLg>`





## Xaml

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Xaml
include('simpleicons-8/X/Xaml')

' renders the element
Xaml('Xaml', 'Xaml', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Xaml
include('simpleicons-8/X/Xaml')

' renders the element
Xaml('Xaml', 'Xaml', 'an optional tech label', 'an optional description')
@enduml
```

